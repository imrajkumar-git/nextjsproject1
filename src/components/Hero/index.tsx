import React from "react";
import dynamic from "next/dynamic";
import VoxelDogLoader from "@/components/DevDog/blender-dog";
import BaseLayout from "@/components/Wrapper/BaseLayout";
import {
  Button,
  VStack,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import SocialProfiles from "@/components/Hero/SocialProfiles";

const LazyVoxelDog = dynamic(() => import("@/components/DevDog"), {
  ssr: true,
  loading: () => <VoxelDogLoader />,
});

const Hero = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <VStack
          m="auto"
          my="10"
          mt={{ base: 10, md: 10, lg: 10, sm: 10, xs: "4em" }}
          zIndex="100"
        >
          <Link
            href="https://github.com/ayushsoni1010"
            textDecoration="none"
            isExternal={true}
            style={{ textDecoration: "none" }}
          >
            <Button
              borderRadius="full"
              borderColor="blue.600"
              h="30px"
              fontSize={{ base: "sm", sm: "sm", xs: "xs" }}
              borderWidth="2px"
            >
              Hello, I&apos;m a Full Stack Developer based in Nepal
            </Button>
          </Link>
        </VStack>
        <Flex
          // display={{ base: "flex", md: "flex", sm: "block", xs: "block" }}
          flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
          justify="space-between"
          direction={{
            base: "row",
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          }}
        >
          <Stack>
            <Heading
              fontSize={{ md: "6xl", lg: "6xl", sm: "4xl", xs: "3xl" }}
              fontWeight="extrabold"
            >
              <Stack display="flex" direction="row">
                <Text colorScheme="black">I&apos;m</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text"
                >
                  Rajkumar Aryal,
                </Text>
              </Stack>
              <Stack display="flex" direction="row">
                <Text colorScheme="black">fullstack</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text"
                >
                  developer
                </Text>
              </Stack>
              <Stack display="flex" direction="row">
                <Text colorScheme="black">and</Text>

                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text"
                >
                  designer.
                </Text>
              </Stack>
            </Heading>
            <Text py="5" colorScheme="black" fontWeight="400">
              I design and create{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}
              >
                functional and beautiful applications
              </span>{" "}
              with passion and a focus on{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}
              >
                user experience
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}
              >
                high quality.
              </span>{" "}
            </Text>
            <ButtonGroup gap="1">
      <Button className="relative inline-block overflow-hidden rounded-lg border border-cyan-400 px-6 py-3 text-lg font-semibold uppercase tracking-widest text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_10px_#00fffc,0_0_25px_#00fffc,0_0_50px_#00fffc,0_0_100px_#00fffc]"
                target="_blank"
                as="a"
                href="/contact"
                
              >
                 <span className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-top" />

      <span className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-right" />

      <span className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-cyan-400 to-transparent animate-bottom" />

      <span className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-transparent via-cyan-400 to-transparent animate-left" />

                Hire Me
              </Button>
              <Button className="relative inline-block overflow-hidden rounded-lg border border-cyan-400 px-6 py-3 text-lg font-semibold uppercase tracking-widest text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_10px_#00fffc,0_0_25px_#00fffc,0_0_50px_#00fffc,0_0_100px_#00fffc]"
                target="_blank"
                as="a"
                href="https://cal.com/rajkumar0977/"
                
              >
                 <span className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-top" />

      <span className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-right" />

      <span className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-cyan-400 to-transparent animate-bottom" />

      <span className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-transparent via-cyan-400 to-transparent animate-left" />

                Schedule a Meeting
              </Button>
            </ButtonGroup>
            <Stack py="4">
              <SocialProfiles />
            </Stack>
          </Stack>
          <Stack>
            <LazyVoxelDog />
          </Stack>
        </Flex>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Hero;
