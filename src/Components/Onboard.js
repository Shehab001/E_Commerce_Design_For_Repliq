import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Input,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import img from "../Assets/onboard/malvestida-u79wy47kvVs-unsplash.jpg";
import img1 from "../Assets/onboard/nrd-c3tNiAb098I-unsplash.jpg";
import img2 from "../Assets/onboard/victor-2PJMDIgK9EA-unsplash.jpg";
import { Tilt } from "react-tilt";

const Onboard = () => {
  return (
    <div className="mx-10 my-20">
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-4">
        <Tilt options={{ max: 15, speed: 300, scale: 1 }}>
          {" "}
          <div>
            <Card className="max-w-[24rem] mx-auto overflow-hidden rounded-none">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={img1} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  Company Name
                </Typography>
                <div className="w-full mt-10 mx-auto">
                  <Input label="Company" />
                </div>
              </CardBody>
            </Card>
          </div>
        </Tilt>

        <Tilt options={{ max: 15, speed: 300, scale: 1 }}>
          <div>
            <Card className="max-w-[24rem] mx-auto overflow-hidden rounded-none">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={img} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  Select Industry
                </Typography>
                <div className="w-full mt-10 mx-auto">
                  <Select
                    label="Select Version"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <Option>Gadget</Option>
                    <Option>Phones</Option>
                    <Option>Tablets</Option>
                    <Option>Laptops</Option>
                    <Option>Earphones</Option>
                  </Select>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tilt>

        <Tilt options={{ max: 15, speed: 300, scale: 1 }}>
          <div>
            <Card className="max-w-[24rem] mx-auto overflow-hidden rounded-none">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={img2} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  Upload Products
                </Typography>
                <div className="mt-3">
                  <Input label="Title" size="lg" />
                  <Input className="mt-2" label="Description" size="lg" />
                  <Input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                  ></Input>
                  <Button
                    className="my-5 rounded-none"
                    variant="gradient"
                    fullWidth
                  >
                    Add Product
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Onboard;
