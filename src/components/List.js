import "./list.css";

const Table = ({ data }) => {
  const filteredKeys = data
    ? Object.values(data).map((keys) => {
        return {
          title: keys.title[0],
          publisher: keys.publisher,
          author: keys.author,
          DOI: keys.DOI,
          url: keys.URL,
          type: keys.type,
          published: keys.published,
        };
      })
    : null;

  return (
    <ul>
      {data
        ? filteredKeys.map((item) => {
            return (
              <li key={item.url}>
                <article className="list-card">
                  <h2 className="list-title">{item.title}</h2>
                  <h3 className="subheading">
                    <p className="type">
                      {item?.type
                        .split("-")
                        .map((text) => text[0].toUpperCase() + text.slice(1))
                        .join(" ")}
                    </p>

                    <i className="publisher">{item.publisher}</i>
                  </h3>
                  <p>
                    <strong>Authors: </strong>
                    {item.author
                      ? item.author.map(
                          (author) => author.given + " " + author.family + " "
                        )
                      : null}
                  </p>
                  <p>
                    <strong> Find out More: </strong>
                    <a href={`${item.url}`} target="_blank">
                      {item.url}
                    </a>
                  </p>
                </article>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Table;
