# typescript-type-inference-thingy

Instructions 

```
yarn
```

```
yarn tsc
```


You will get the error: 

```
src/foo.ts:36:30 - error TS2339: Property 'a' does not exist on type 'string | number | Foo'.
  Property 'a' does not exist on type 'string'.

36     generateString: (v) => v.a //(parameter) v: Fo
```


Now: 

In the `tsconfig.json` change: 

```diff
-    "strict": false,                                      /* Enable all strict type-checking options. */
+   "strict": true,                                      /* Enable all strict type-checking options. */
```

Run 

```
yarn tsc
```

The error no longer appears.



Note on the otherhand, this behaviour does not occur on TypeScript playground! 

https://www.typescriptlang.org/play?strict=false&ts=4.9.5#code/FAFwngDgpgBAYgewTAvDA3sGMCGAuGAZxACcBLAOwHMBuGLGAIwIoFcBbRqEu4AX2CCAxggrEYAMySEYBAIIkSOMAB5ECAHyoYAbQaZs2fDABEOEwBp6hpgQCMDPlYOHjJxpeuHmMAEyPgAF1eQXBoGABlBHYoAGFoiFEoChAABRIECEIVABUtNBdRWIALHGooAgAKADccABtWCpgcgEpULWqEMgATXiNasjqcRjqoADV6xsJ5RWVcjT6iKFGhEChuiYamnJgAHxg2OrrFqmTuHDWI0koqKtqtglb2omvqXgFgKAAPRJIQGBEYn+URi8XYiQoyX+aFyFg0lQgGSyBBBcQSSRS6Uy2TybRQWkwH2AqLBEKhlUKFBKZVOd0mTXUewOrCOTOI5GoTLYnG4eK0JmKyzqCAAhJYGDgBkMRuN6dNJNIrAxCMsoKt1ptGiwWXUldhTpClJdXrcYDU+TBqgA6HAwAD0doROCUMTWJDa1QI6kEfBagiAA

(No error occurs when strict is false). 


