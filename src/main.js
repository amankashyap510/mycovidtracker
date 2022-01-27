import React from "react";
import { useLazyQuery } from "@apollo/client";
import { getData } from "./graphql";
import { useState } from "react";
import {
  TrakerContainer,
  TrakerInnerContainer,
  HeaderBar,
  SearchBar,
  SearchButton,
  DataOuterContainer,
  CountryWrapper,
  SearchedCountry,
  ConformedCaes,
  DecresedCases,
  RecoveredCases,
  LatestUpdate,
  WrapperContainer,
  PrimaryInfromation,
} from "./style";

function Main() {
  const { getCode } = require("country-list");
  const [countrySearched, setCountrySearched] = useState("");
  const [getCovidData, { data, error }] = useLazyQuery(getData, {
    variables: { code: getCode(countrySearched) },
  });

  if (error)
    return (
      <h3 style={{ textAlign: "center", marginTop: "10%" }}>Invalid Input</h3>
    );
  if (data) console.log(data);

  return (
    <TrakerContainer>
      <TrakerInnerContainer>
        <HeaderBar>
          {" "}
          <div>
            <h2>Get live data for better decisions in an uncertain time.</h2>
          </div>
          Select Country
        </HeaderBar>

        <SearchBar
          type="text"
          placeholder="Country"
          onChange={(event) => {
            setCountrySearched(event.target.value);
          }}
        />
        <SearchButton className="btn btn-light" onClick={() => getCovidData()}>
          Click
        </SearchButton>
        <br />
        {data ? (
          <>
            <DataOuterContainer>
              <CountryWrapper>
                <SearchedCountry>Country : {data.country.name}</SearchedCountry>
              </CountryWrapper>
              <WrapperContainer>
                <ConformedCaes>
                  confirmedCases :{data.country.latest.confirmed}
                </ConformedCaes>

                <DecresedCases>
                  decreasedCases : {data.country.latest.deceased}
                </DecresedCases>
              </WrapperContainer>
              <br></br>
              <WrapperContainer>
                <RecoveredCases>recoveredTillDate :867</RecoveredCases>

                <LatestUpdate>
                  lastUpdated : {data.country.latest.lastUpdated}
                </LatestUpdate>
              </WrapperContainer>
            </DataOuterContainer>
          </>
        ) : (
          <PrimaryInfromation>
            <h3>
              COVID-19:It is originated from WUHAN(CHINA) and spread all over
              the Globe.
            </h3>
            <h4>
              Globally, as of now, 27 January 2022, there have been 356,955,803
              confirmed cases of COVID-19, including 5,610,291 deaths, reported
              to WHO. As of 25 January 2022, a total of 9,679,721,754 vaccine
              doses have been administered.
            </h4>

            <iframe src="https://public.domo.com/cards/2kO6J" width="900" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
          </PrimaryInfromation>
        )}
      </TrakerInnerContainer>
      <br></br>
      <br />
    </TrakerContainer>
  );
}

export default Main;
