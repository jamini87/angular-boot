/**
 * Created by Jafar Amini in May 2018.
 */
export declare type QueryOperator =
  'equals' | 'notEquals' | 'equalsIgnoreCase' | 'notEqualsIgnoreCase' |
  'lessThan' | 'greaterThan' | 'lessThanOrEquals' | 'greaterThanOrEquals' | 'like';
export declare type SortDirection =
  'asc' | 'desc' | '';

// export declare type RangedNumber =
//   Number & [1,3];

export declare type URLQueryParameterType =
  'String' | 'Integer' | 'Long' | 'Boolean' | 'Date'
  /**
   *********************
   'String'  :
   Plain text parameters.
   Can contain any valid characters that are allowed in URL’s.
   In case of a "XXXLike" parameter, the string should contain the wildcard
   character "%" (properly url-encoded).
   This allows to specify the intent of the like-search. E.g.
   "Tas%" matches all values, starting with Tas.
   *********************
   'Integer' :
   Parameter representing an integer value.
   Can only contain numeric non-decimal values,
   between -2.147.483.648 and 2.147.483.647.
   *********************
   'Long' :
   Parameter representing a long valueCan only contain numeric non-decimal values,
   between -9.223.372.036.854.775.808 and 9.223.372.036.854.775.807.
   *********************
   'Boolean' :
   Parameter representing a boolean value.
   Can be either "true" or "false". All other values other
   than these two, will cause a "405 - Bad request" response.
   *********************
   'Date' :
   Parameter representing a date value. Use the ISO-8601 date-format
   (see ISO-8601 on wikipedia) using
   both time and date-components (e.g. "2013-04-03T23:45Z").
   *********************
   */
  ;
export declare type JsonParameterType =
  'String' | 'Integer' | 'Long' | 'Date'
  /**
   *********************
   'String':
   Plain text parameters. In case of a "XXXLike" parameter,
   the string should contain the wildcard character "%".
   This allows to specify the intent of the like-search.
   E.g. "Tas%" matches all values, starting with Tas.
   *********************
   'Integer':
   Parameter representing an integer value,
   using a JSON number. Can only contain numeric non-decimal values,
   between -2.147.483.648 and 2.147.483.647.
   *********************
   'Long':
   Parameter representing a long value,
   using a JSON number. Can only contain numeric non-decimal values,
   between -9.223.372.036.854.775.808 and 9.223.372.036.854.775.807.
   *********************
   'Date':
   Parameter representing a date value,
   using a JSON text. Use the ISO-8601 date-format
   (see ISO-8601 on wikipedia) using both time and date-components
   (e.g. "2013-04-03T23:45Z")
   */
  ;
export declare type QueryJsonType =
  'string' | 'short' | 'integer' | 'long' | 'double' | 'boolean' | 'date'
  ;

export declare type DefaultJsonQueryType =
  'string' | 'short' | 'integer' | 'long' | 'double' | 'boolean' | 'date'
  /**
   *********************
   'string' :
   Value is threaded as and converted to a "java.lang.String".
   *********************
   'short' :
   Value is threaded as and converted to a "java.lang.Integer".
   *********************
   'integer' :
   Value is threaded as and converted to a "java.lang.Integer".
   *********************
   'long' :
   Value is threaded as and converted to a "java.lang.Long".
   *********************
   'double' :
   Value is threaded as and converted to a "java.lang.Double".
   *********************
   'boolean' :
   Value is threaded as and converted to a "java.lang.Boolean".
   *********************
   'date' :
   Value is treated as and converted to a "java.util.Date".
   The JSON string will be converted using ISO-8601 date format.
   *********************
   */
  ;
export declare type VariableType =
  'string' | 'integer' | 'short' | 'long' | 'double' |
  'boolean' | 'date' | 'binary' | 'serializable'
  /**
   *********************
   'string' :
   Value is threaded as a "java.lang.String". Raw JSON-text value is used when writing a variable.
   *********************
   'integer' :
   Value is threaded as a "java.lang.Integer".
   When writing, JSON number value is used as base for conversion, falls back to JSON text.
   *********************
   'short' :
   Value is threaded as a "java.lang.Short".
   When writing, JSON number value is used as base for conversion, falls back to JSON text.
   *********************
   'long' :
   Value is threaded as a "java.lang.Long".
   When writing, JSON number value is used as base for conversion, falls back to JSON text.
   *********************
   'double' :
   Value is threaded as a "java.lang.Double".
   When writing, JSON number value is used as base for conversion, falls back to JSON text.
   *********************
   'boolean' :
   Value is threaded as a "java.lang.Boolean". When writing, JSON boolean value is used for conversion.
   *********************
   'date' :
   Value is treated as a "java.util.Date".
   When writing, the JSON text will be converted using ISO-8601 date format.
   *********************
   'binary' :
   Binary variable, treated as an array of bytes.
   The "value" attribute is null, the "valueUrl" contains an URL pointing to the raw binary stream.
   *********************
   'serializable' :
   Serialized representation of a Serializable Java-object.
   As with the "binary" type, the "value" attribute is null,
   the "valueUrl" contains an URL pointing to the raw binary stream.
   All serializable variables (which are not of any of the above types)
   will be exposed as a variable of this type.
   *********************
   */
  ;
