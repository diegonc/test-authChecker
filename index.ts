import "reflect-metadata";
import { buildSchema, Resolver, Query } from 'type-graphql'

@Resolver()
class TestResolver {
  @Query(type => String)
  test() {
    return "Hello World!"
  }
}

buildSchema({
  authChecker: () => true,
  resolvers: [TestResolver]
})
