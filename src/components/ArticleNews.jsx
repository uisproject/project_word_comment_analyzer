import React from "react";

const ArticleNews = () => {
  return (
    <div style={{ border: "1px solid #898989", padding: "1.25rem" }}>
      <div style={{ fontWeight: "bold" }}>11 hours ago</div>
      <div className="content">
        <div
          className="content-title"
          style={{ fontSize: "1.5em", padding: "10px 0" }}
        >
          <strong>
            Suspendisse at nisl dolor. Curabitur sed faucibus metus, efficitur
            ultrices est. Etiam at scelerisque erat. Morbi sodales fermentum
            odio, sed eleifend tortor ornare at.
          </strong>
        </div>
        <div className="author">
          <div>By Ben Kesslen</div>
        </div>
        <div className="content-img" style={{ maxWidth: "100%" }}>
          <img
            src="https://nypost.com/wp-content/uploads/sites/2/2022/05/johnny-depp-amber-heard-trial-may27-151.jpg?w=2000"
            alt="article-img"
            style={{ width: "100%" }}
          />
        </div>
        <div className="content-para" style={{ lineHeight: "2em" }}>
          <p>
            Suspendisse pellentesque non nulla vitae mattis. Phasellus elementum
            scelerisque vulputate. Nulla quis faucibus dolor. Fusce in eros et
            dui placerat feugiat. Etiam mi nisi, maximus ac urna nec, pharetra
            tempus mauris. Fusce auctor dapibus consequat. Donec sodales massa
            mi, a maximus felis congue ac. Pellentesque congue risus et nibh
            pulvinar molestie.
          </p>
          <p>
            Maecenas turpis arcu, commodo quis est aliquet, auctor faucibus mi.
            Pellentesque mauris risus, porttitor dignissim dapibus sed, aliquam
            vel odio. Curabitur porta nulla id urna sodales rutrum. Quisque a
            turpis vel arcu commodo egestas id sed eros. Donec condimentum
            faucibus massa, in lobortis mauris feugiat a. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. In hac habitasse platea dictumst. Donec nulla purus,
            gravida id placerat id, pretium non nulla. Morbi pharetra nulla vel
            elit lacinia dictum. Donec rutrum eget neque vestibulum placerat.
            Duis nec mi nulla.
          </p>
          <p>
            Suspendisse at nisl dolor. Curabitur sed faucibus metus, efficitur
            ultrices est. Etiam at scelerisque erat. Morbi sodales fermentum
            odio, sed eleifend tortor ornare at. Mauris arcu diam, tincidunt
            quis gravida vitae, tempus eu neque. Aenean quam risus, feugiat non
            molestie et, feugiat a arcu. Donec aliquam risus vel sapien rhoncus,
            ac finibus nisi ultricies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleNews;
