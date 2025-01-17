# sf-id-converter

Convert Salesforce IDs between 15 and 18 characters. You can see this converter in action at [RatedCalculator's Salesforce ID Converter](https://www.ratedcalculator.com/calculators/software/salesforce-id-converter).

## Installation

```bash
npm install sf-id-converter
```

## Usage

```typescript
import { to18, to15 } from "sf-id-converter";

// Convert 15-character ID to 18-character
const id18 = to18("a01B000000JsLAI");
console.log(id18); // 'a01B000000JsLAIIAM'

// Convert 18-character ID to 15-character
const id15 = to15("a01B000000JsLAIIAM");
console.log(id15); // 'a01B000000JsLAI'
```

## API

### to18(sfid15: string): string

Converts a 15-character Salesforce ID to its 18-character case-safe version.

### to15(sfid18: string): string

Converts an 18-character Salesforce ID to its 15-character version.

## How it works

The 18-character version of a Salesforce ID adds a 3-character suffix to the 15-character ID. This suffix is calculated based on the case sensitivity of each character in the original ID, making the 18-character version case-insensitive. This is particularly useful in case-sensitive contexts where the original 15-character ID might be ambiguous.

## License

MIT
