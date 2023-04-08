import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";

export default function CategoryCard(props) {
  //console.log(props.name);
  return (
    <Card
      shadow={true}
      className="relative rounded-none grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center hover:scale-110 hover:duration-1000		"
    >
      <CardHeader
        floated={false}
        shadow={true}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center"
        style={{ backgroundImage: `url(${props.data})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-5 px-6 md:px-12">
        <Button className="rounded-none text-black bg-white">
          {props.name}
        </Button>
      </CardBody>
    </Card>
  );
}
