import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Login() {
  return (
    <div>
      <h1 className="title">Login</h1>
      <Card className="login-container">
        <img
          src={"https://cdn-icons-png.flaticon.com/512/3011/3011270.png"}
          alt="logo"
          style={{ width: "150px", marginBottom: "30px" }}
        />
        <CardContent>
          <div id="login-page">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              style={{ marginTop: "25px" }}
              label="Password"
              variant="outlined"
            />
            <Button variant="contained" style={{ marginTop: "25px" }}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
