import { useState } from "react";
import { Box, Select, Text, VStack, Heading, Container } from "@chakra-ui/react";

const Index = () => {
  const countries = {
    USA: { currency: "USD", states: { California: ["Los Angeles", "San Francisco"], "New York": ["New York City", "Buffalo"] } },
    India: { currency: "INR", states: { Maharashtra: ["Mumbai", "Pune"], Karnataka: ["Bangalore", "Mysore"] } },
    UK: { currency: "GBP", states: { England: ["London", "Manchester"], Scotland: ["Edinburgh", "Glasgow"] } },
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [currency, setCurrency] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCurrency(countries[country].currency);
    setStates(Object.keys(countries[country].states));
    setSelectedState("");
    setCities([]);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(countries[selectedCountry].states[state]);
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          Location Selector
        </Heading>
        <Box>
          <Text mb={2}>Select a Country:</Text>
          <Select placeholder="Select country" value={selectedCountry} onChange={handleCountryChange}>
            {Object.keys(countries).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Select>
        </Box>
        {selectedCountry && (
          <>
            <Box>
              <Text mb={2}>Currency:</Text>
              <Text fontSize="lg" fontWeight="bold">
                {currency}
              </Text>
            </Box>
            <Box>
              <Text mb={2}>Select a State:</Text>
              <Select placeholder="Select state" value={selectedState} onChange={handleStateChange}>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Select>
            </Box>
          </>
        )}
        {selectedState && (
          <Box>
            <Text mb={2}>Select a City:</Text>
            <Select placeholder="Select city">
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
