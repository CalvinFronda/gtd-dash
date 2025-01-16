import { Text, Title } from "@mantine/core";

export default function Main() {
  return (
    <div>
      <Title className="text-center mt-20">
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Getting Stuff Done
        </Text>{" "}
        <Text size="md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          aliquam omnis sequi dolores sit dolor sed quae architecto nihil,
          ratione officia enim dolore tempore quod accusantium aliquid nemo non
          maiores!
        </Text>
      </Title>
    </div>
  );
}
