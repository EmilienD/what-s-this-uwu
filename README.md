# What's this? UωU

Every object-oriented Javascript developer's favourite game, guessing what "this" is in the current context.

This is a simple game where you're shown a piece of code and have to guess the value of `this` when it is passed to the `whats` function.

## Contributing

You can add your own puzzles!
Simply make a pull request with a new JSON file in `src/puzzles`.
The object should look like this:

```JSON
{
  "question": "(function() { whats(this) })()",
  "answers": [
    {
      "value": "global",
      "displayName": "global object",
      "isCorrect": true
    },
    {
      "value": "undefined"
    }
  ]
}
```

At least one answer should be correct.
Run `npm run test:puzzles` to make sure your puzzle is correct before making your pull request.

Other types of contributions are also welcome.
