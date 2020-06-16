import "reflect-metadata";
import { buildSchema, Resolver } from 'type-graphql'

@Resolver()
class TestResolver {
}

buildSchema({
  authChecker: () => true,
  resolvers: [TestResolver]
})
