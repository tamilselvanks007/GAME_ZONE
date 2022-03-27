import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Body() {
  const styles = {
    fontFamily: "Bebas Neue",
    fontSize: "22px",
  };
  const styles1 = {
    fontFamily: "Bebas Neue",
    fontSize: "18px",
  };
  return (
    <div>
      <section className="section" style={{ backgroundColor: "pink" }}>
        <div className="container">
          <div className="row" style={{ margin: "8px" }}>
            <div className="col-md-12 text-center">
              <h3
                className="main-heading navbar"
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Our Company
              </h3>
              <p style={styles}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section
          className="section bg-c-light border-top"
          style={{ backgroundColor: "aquamarine" }}
        >
          <div className="container">
            <div className="row" style={{ margin: "8px" }}>
              <div className="col-md-12 mb-4 text-center">
                <h3
                  className="main-heading navbar"
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  VISION-MISSION-VALUES
                </h3>
              </div>

              <div
                className="col-md-4 text-center"
                style={{ marginTop: "8px" }}
              >
                <h6
                  className="text-primary"
                  style={{ fontFamily: "Bebas Neue", fontSize: "22px" }}
                >
                  {" "}
                  OUR VISION{" "}
                </h6>
                <p style={{ fontFamily: "Bebas Neue", fontSize: "19px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div
                className="col-md-4 text-center"
                style={{ marginTop: "8px" }}
              >
                <h6
                  className="text-primary"
                  style={{ fontFamily: "Bebas Neue", fontSize: "22px" }}
                >
                  {" "}
                  OUR MISSION{" "}
                </h6>
                <p style={{ fontFamily: "Bebas Neue", fontSize: "19px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div
                className="col-md-4 text-center"
                style={{ marginTop: "8px" }}
              >
                <h6
                  className="text-primary"
                  style={{ fontFamily: "Bebas Neue", fontSize: "22px" }}
                >
                  {" "}
                  OUR VALUE{" "}
                </h6>
                <p style={{ fontFamily: "Bebas Neue", fontSize: "19px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className="section bg-c-light border-top"
        style={{ backgroundColor: "lightyellow" }}
      >
        <div className="container">
          <div className="row" style={{ margin: "8px" }}>
            <div className="col-md-12 mb-4 text-center">
              <h3
                className="main-heading navbar"
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Our Services
              </h3>
            </div>

            <div className="col-md-4" style={{ marginBottom: "20px" }}>
              <div className="card shadow">
                <img
                  src={
                    "https://blog.playstation.com/tachyon/2022/03/af8d7dc5880d606f6a92ae4b089d598b34a41ec5.jpg?resize=1088%2C612&crop_strategy=smart"
                  }
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6 style={styles} className="text-primary">
                    {" "}
                    Consoles{" "}
                  </h6>
                  <p style={styles1}>
                    Lorem ipsum is simply dummy text of the printing and
                    typingsetting industry.
                  </p>
                  <Link
                    to="/consoles"
                    style={styles1}
                    className="btb btn-warning shadow"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={
                    "https://www.popsci.com/uploads/2021/09/17/best-ps4-games.jpg?auto=webp"
                  }
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6 style={styles} className="text-primary">
                    {" "}
                    Games{" "}
                  </h6>
                  <p style={styles1}>
                    Lorem ipsum is simply dummy text of the printing and
                    typingsetting industry.
                  </p>
                  <Link
                    to="/games"
                    style={styles1}
                    className="btb btn-warning shadow"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={"https://wallpaperaccess.com/full/3881687.jpg"}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6 style={styles} className="text-primary">
                    {" "}
                    Controller{" "}
                  </h6>
                  <p style={styles1}>
                    Lorem ipsum is simply dummy text of the printing and
                    typingsetting industry.
                  </p>
                  <Link
                    to="/controllers"
                    style={styles1}
                    className="btb btn-warning shadow"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
