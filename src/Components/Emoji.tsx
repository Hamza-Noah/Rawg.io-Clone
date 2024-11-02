import bullsEye from "../assets/bulls-eye.webp";
import thmbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number] : ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25PX" },
    4: { src: thmbsUp, alt: "recommended", boxSize: "25PX" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35PX" },
  };

  return (
    <>
      <Image {...emojiMap[rating]} marginTop={1}/>
    </>
  );
};

export default Emoji;
