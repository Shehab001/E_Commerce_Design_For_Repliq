import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Card
      color="transparent"
      shadow={true}
      className="w-96 py-10 mx-auto mt-20"
    >
      <Typography className="w-96" variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal w-96">
        Enter your details to Sign Up.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-80 mx-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input type="email" size="lg" label="Email" required />
          <Input size="lg" label="Phone Number" required />
          <Input type="password" size="lg" label="Password" required />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Sign Up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a className="font-medium text-blue-500 transition-colors hover:text-blue-700">
            <Link to="/login">Log In</Link>
          </a>
        </Typography>
      </form>
    </Card>
  );
}
