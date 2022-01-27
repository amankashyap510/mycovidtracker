import Main from "./main";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./header";
const client = new ApolloClient({
  cache: new InMemoryCache(),

  uri: "https://covid19-graphql.herokuapp.com/",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Main />
    </ApolloProvider>
  );
}

export default App;
