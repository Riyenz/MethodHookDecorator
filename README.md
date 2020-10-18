# Method Hook Decorator

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install @riyenz/method-hook-decorator --save

# For Yarn, use the command below.
yarn add @riyenz/method-hook-decorator
```

### The Old Way

```typescript
@Component({
  ...
})
export class DefaultDashboardComponent implements OnInit {
  ngOnInit() {
    this._fetchData();
    this._setupDisplay();
  }

  private _fetchData() {
    ...
  }

  private _setupDisplay() {
    ...
  }
}

```

### The Method Hook Way!

You can use method hook to have a clean and nicer looking code.

```typescript
import { MethodHook } from '@riyenz/method-hook-decorator';

@Component({
  ...
})
export class DefaultDashboardComponent implements OnInit {
  ngOnInit() {
    ...
  }

  // calls _fetchData before ngOnInit
  @MethodHook.Before('ngOnInit')
  private _fetchData() {
    ...
  }

  // calls _setupDisplay after ngOnInit
  @MethodHook.After('ngOnInit')
  private _setupDisplay() {
    ...
  }
}

```

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
