interface ResponsesContract {
    summary: string;
}
export declare function DefaultResponses({ summary }: ResponsesContract): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export {};
