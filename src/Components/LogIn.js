import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LogIn() {
  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Card
        color="transparent"
        shadow={true}
        className="w-96 py-10 mx-auto mt-20"
      >
        <Typography className="w-96" variant="h4" color="blue-gray">
          Log In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal w-96">
          Enter your details to Log In.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-80 mx-auto">
          <div className="mb-4 flex flex-col gap-6">
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
            Log In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a className="font-medium text-blue-500 transition-colors hover:text-blue-700">
              <Link to="/signup">Sign Up</Link>
            </a>
          </Typography>
        </form>
      </Card>
    </motion.div>
  );
}
