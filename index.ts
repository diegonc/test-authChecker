import "reflect-metadata";
import { buildSchema, Resolver, Query } from 'type-graphql'

@Resolver()
class TestResolver {
  @Query(type => String)
  test() {
    return "Hello World!"
  }
}

async function main() {
  try {
    await buildSchema({
      authChecker: () => true,
      resolvers: [TestResolver]
    })
  } catch (e) {
    console.log(e)
  }
}

main()
