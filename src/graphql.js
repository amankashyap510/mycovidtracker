import { gql } from "@apollo/client";

export const getData = gql`
  query country($code: String!) {
    country(code: $code) {
      name
      latest {
        confirmed
        deceased
        lastUpdated
      }
    }
  }
`;
