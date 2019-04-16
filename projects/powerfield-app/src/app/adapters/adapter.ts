export abstract class Adapter<T> {
  public abstract adapt(item: any): T;

  public adaptArray(items: Array<any>): Array<T> {
    return items.map(item => this.adapt(item));
  }
}
