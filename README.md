# bloc_ts
A small, concise project to bring the power and flexibility of Bloc patterns to TypeScript. 

What is BLoC: https://www.didierboelens.com/2018/08/reactive-programming-streams-bloc/

Inspired by the brilliant flutter_bloc: https://pub.dev/packages/flutter_bloc

NPM: https://www.npmjs.com/package/bloc_ts

See example directory:  https://github.com/andyl-astardigital/bloc_ts/tree/master/lib/example

Components (React/Angular/Others) communicate with the business logic classes via firing Events (which can contain information). The components listen for the Blocs to emit new States and update the UI based on those States. In this case several State updates can be fired for a given Event giving powerful async behaviour while keeping Business Logic seperated from across different UI technologies (and therefore re-usable) .
