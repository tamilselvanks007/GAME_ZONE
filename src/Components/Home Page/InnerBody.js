export default function InnerBody() {
  return (
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

            <div className="col-md-4 text-center" style={{ marginTop: "8px" }}>
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

            <div className="col-md-4 text-center" style={{ marginTop: "8px" }}>
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

            <div className="col-md-4 text-center" style={{ marginTop: "8px" }}>
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
  );
}
