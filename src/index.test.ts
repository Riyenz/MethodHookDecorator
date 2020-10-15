import { MethodHook } from './';
describe('MethodHook', () => {
  class SampleClass {
    public isCallMeBeforeCalled = false;
    public isCallMeAfterCalled = false;

    init() { }

    @MethodHook.Before('init')
    callMeBefore() {
      this.isCallMeBeforeCalled = true;
    }

    @MethodHook.After('init')
    callMeAfter() {
      this.isCallMeAfterCalled = true;
    }
  }

  const sampleClass = new SampleClass();

  it('MethodHook Before and After should be called when init function is called', () => {
    sampleClass.init();
    expect(sampleClass.isCallMeBeforeCalled).toBeTruthy()
    expect(sampleClass.isCallMeAfterCalled).toBeTruthy()
  });
});
