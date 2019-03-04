export abstract class GlobalConfigurations {
  abstract getRoutingNoArgument(): string;
  abstract successCreate(msg: { title?: string, text?: string });
  abstract successEdit(msg: { title?: string, text?: string });
}

