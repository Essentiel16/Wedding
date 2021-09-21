import React from "react";
import { Text, Box, Spacer, Link } from "@chakra-ui/react";
import styles from "./about.module.css";
import { Facebook, Twitter, Instagram } from "../svg";

function AboutUs() {
  return (
    <div className={styles.flex}>
      <Box pl=".8rem">
        <Box bg="brand.main" h="41rem" w="36rem" p=".5rem">
          <Box
            h="40rem"
            w="35rem"
            bgImage="url('/assets/pictures/8.1.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            pos="relative"
            _hover={{cursor:"pointer", opacity: ".4", zIndex: "1"}}
            className="brideImage"
          ></Box>
          <Box className="hoverInfo" sx={{
        ".brideImage:hover &": {
          visibility: "visible",
        },
      }}
>
            <ul className={styles.icons}>
              <div className={styles.hoverInfo}>
                <ul className={styles.icons}>
                  <Link href="#" title="Facebook">
                    <Box width="10" height="20">
                      {Facebook}
                    </Box>
                  </Link>
                  <Link href="#" title="Facebook">
                    <Box width="10" height="20">
                      {Twitter}
                    </Box>
                  </Link>
                  <Link href="#" title="Facebook">
                    <Box width="10" height="20">
                      {Instagram}
                    </Box>
                  </Link>
                </ul>
              </div>
            </ul>
          </Box>
        </Box>

        <Box w="35rem">
          <Text mt="1rem" fontSize="2.4rem" color="brand.black" pl=".4rem">
            {" "}
            ABIGAIL MOFEOLUWA
          </Text>
          <Text fontSize="1.5rem" color="brand.black" pl=".4rem">
            Sarah is amazing. When I first met her I knew she was amazing and
            every passing day reminds me of just how amazing she is! I really
            love her incredibly unique blend of talents, interests, and
            personality. She&apos;s a talented artist, always excited about
            trying new things, and a genuinely loving person. She&apos;s
            everything I&apos;ve always dreamed of and I&apos;m so excited to
            spend the rest of my life with her!
          </Text>
        </Box>
      </Box>
      <Spacer />

      <Box pl=".8rem">
        <Box bg="brand.main" h="41rem" w="36rem" p=".5rem">
          <Box
            h="40rem"
            w="35rem"
            bgImage="url('/assets/pictures/1.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            pos="relative"
          ></Box>
        </Box>
        <Box w="35rem">
          <Text mt="1rem" fontSize="2.4rem" color="brand.black" pl=".4rem">
            SAMUEL OLUWASANMI
          </Text>
          <Text fontSize="1.5rem" color="brand.black" pl=".4rem">
            Someone once told me that &ldquo;when you meet the right person,
            you&apos;ll know.&ldquo; Well, I just knew. Right away, we connected
            in a way that left me feeling whole and complete. Mark has a truly
            amazing heart and I love how genuine and balanced he is about
            everything. I am so incredibly blessed and excited to spend everyday
            for the rest of my life with my best friend!
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default AboutUs;
