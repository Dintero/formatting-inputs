# formatting-inputs

## BlocksRangeInput

Formats the input value on change and blur to adhere to blocks with configurable separators, and limit the range of accepted characters.

```ts
<BlocksRangeInput
    name="ccc"
    options: {
        blocks: [4, 4, 4, 4],
        separators: [" ", " ", " "],
        overflow: false,
        range: /[0-9]/,
    },
    placeholder: "xxxx xxxx xxxx xxxx",
/>
```

BlocksRangeInput options type

```ts
type BlocksRangeInputOptions = {
    blocks?: number[];
    separators?: string[];
    overflow?: boolean;
    range?: RegExp;
};
```

## NumbersInput

Formats the input value on blur, good for monetary amounts with given decimals or large numbers.

```ts
<NumberInput
    name="amount"
    options={{
        decimals: 2,
        separator: ",",
    }}
    placeholder="0.00"
/>
```

NumberInput options type

```ts
export type NumberInputOptions = {
    decimals?: number;
    delimiter?: "." | ",";
    separator?: string;
};
```

# Testing

```
yarn test
```

# Storybook

See a list of potential use cases. Also handy during development to test multiple permutations of the options in one place.

```
yarn storybook
```

# Prettier

Used for codestyle.

```
yarn prettier-fix
```

# Build

Used for codestyle.

```
yarn build
```

# Creating a new release

Enforce all commits to the master branch to be formatted according to the Angular Commit Message Format.
