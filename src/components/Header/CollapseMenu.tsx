import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Stack,
} from "@chakra-ui/react";
import { linkDetails } from "./__linkDetails";

const CollapseMenu = ({ isOpen, setOpen }) => {
  return (
    <React.Fragment>
      <Collapse in={isOpen}>
        <div className="box" style={{backgroundColor:"black"}}>

        
          <Stack
            display={{ md: "none", sm: "flex", xs: "flex" }}
            flexDir="column"
            w="full"
          >
            {linkDetails.map((item, index) => (
              <Button
                key={index}
                as="a"
                variant="ghost"
                size="sm"
                onClick={setOpen}
                colorScheme="teal"
                href={item.link}
                _focus={{ boxShadow: "outline" }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
          <ButtonGroup display={{ sm: "flex", xs: "flex" }}>
            <Button
              as="a"
              target="_blank"
              href="/resume"
              border="2px"
              variant="outline"
              size="sm"
              onClick={setOpen}
              colorScheme="teal"
              _focus={{ boxShadow: "outline" }}
            >
              Resume
            </Button>
            <Button
              as="a"
              href="https://cal.com/imrajkumargit/"
              target="_blank"
              variant="solid"
              size="sm"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.500, green.400)"
              onClick={setOpen}
              _focus={{ boxShadow: "outline" }}
            >
              Schedule a Meeting
            </Button>
          </ButtonGroup>
        </div>
      </Collapse>
    </React.Fragment>
  );
};

export default CollapseMenu;
