import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  const styles = {
    fontFamily: "Bebas Neue",
    fontSize: "18px",
  };

  return (
    <div>
      <section
        className="section footer text-dark"
        style={{ backgroundColor: "lavender" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6 className="navbar text-info"> COMPANY INFORMATION </h6>
              <hr />

              <p className="text-dark" style={styles}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-4" style={{ marginBottom: "20px" }}>
              <h6 className="navbar text-info"> FOLLOW US ON </h6>
              <hr />
              <span>
                <a href="https://www.facebook.com/">
                  <FacebookIcon color={"primary"} />
                </a>
              </span>
              <a href="https://www.instagram.com/?hl=en">
                <span>
                  <InstagramIcon className="instagram" />
                </span>
              </a>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                <span>
                  <TwitterIcon color={"primary"} />
                </span>
              </a>
              <a href="https://accounts.google.com">
                <span>
                  <img
                    style={{ height: "25px", width: "25px" }}
                    src={"https://img.icons8.com/color/344/gmail-new.png"}
                    alt="gmail"
                    className="mail"
                  />
                </span>
              </a>
            </div>

            <div className="col-md-4">
              <h6 className="navbar text-info"> CONTACT INFORMATION </h6>
              <hr />

              <div>
                <p className="text-while mb-1" style={styles}>
                  #64, Chennai Tamilnadu India.
                </p>
              </div>
              <div>
                <p className="text-while mb-1" style={styles}>
                  +91 9999xxxxx1
                </p>
              </div>
              <div>
                <p className="text-while mb-1" style={styles}>
                  +91 9987xxxxx2
                </p>
              </div>
              <div>
                <p className="text-while mb-1" style={styles}>
                  someone@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
