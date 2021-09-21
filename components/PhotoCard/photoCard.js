import React from "react";
import styles from "./photoCard.module.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Box,
  Grid,
} from "@chakra-ui/react";

function PhotoCard() {
  return (
    <Box px="2rem">
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{ boxShadow: "none" }}>BRIDESMAIDS</Tab>
          <Tab _focus={{ boxShadow: "none" }}>GROOMSMEN</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/2.3.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              >
                        <Text className={styles.bridesmaid}>Name</Text>
        <Text className={styles.hoverable}>BRIDESMAID</Text>
              </Box>
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/2.3.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/2.3.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/2.3.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
            </Grid>

            <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="3rem">
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/2.3.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/2.3.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/2.3.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/2.3.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
            </Grid>
            {/* <Flex>
    <HStack spacing="24px">
    <div className={styles.Card}>
        <Image src="/assets/bride.jpeg" alt="" width={400} height={241}/>
        <p className={styles.bridesmaid}>Name</p>
        <p className={styles.hoverable}>BRIDESMAID</p>
      </div>

      <div className={styles.Card}>
        <Image src="/assets/bride.jpeg" alt="" width={400} height={241}/>
        <p className={styles.bridesmaid}>Name</p>
        <p className={styles.hoverable}>BRIDESMAID</p>
      </div>

      <div className={styles.Card}>
        <Image src="/assets/bride.jpeg" alt="" width={400} height={241}/>
        <p className={styles.bridesmaid}>Name</p>
        <p className={styles.hoverable}>BRIDESMAID</p>
      </div>

      <div className={styles.Card}>
        <Image src="/assets/bride.jpeg" alt="" width={400} height={241}/>
        <p className={styles.bridesmaid}>Name</p>
        <p className={styles.hoverable}>BRIDESMAID</p>
      </div>

      <div className={styles.Card}>
        <Image src="/assets/bride.jpeg" alt="" width={400} height={241}/>
        <p className={styles.bridesmaid}>Name</p>
        <p className={styles.hoverable}>BRIDESMAID</p>
      </div>
      </HStack>
    </Flex> */}


          </TabPanel>
          <TabPanel>
            {/* <Flex>
              <HStack spacing="24px">
                <div className={styles.Card}>
                  <Image
                    src="/assets/bride.jpeg"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className={styles.bridesmaid}>Name</p>
                  <p className={styles.hoverable}>BRIDESMAID</p>
                </div>

                <div className={styles.Card}>
                  <Image
                    src="/assets/bride.jpeg"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className={styles.bridesmaid}>Name</p>
                  <p className={styles.hoverable}>BRIDESMAID</p>
                </div>
              </HStack>
            </Flex> */}
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/4.2.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/4.1.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/5.1.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
              <Box
                w="100%"
                h="400"
                bgImage="url('/assets/pictures/6.1.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              />
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default PhotoCard;
