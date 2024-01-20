-- database
select --replace(
UTL_RAW.cast_to_varchar2(UTL_ENCODE.base64_encode((DBMS_CRYPTO.encrypt (RAWTOHEX ('FE8D17C074688BC2E0530C1D140A9CD2'), 6 + 256 + 4096, RAWTOHEX('4566456678997899'), RAWTOHEX('1234123456785678')))))
--,'+','%2B')
id from dual;

-- client
select replace(
UTL_RAW.cast_to_varchar2(UTL_ENCODE.base64_encode((DBMS_CRYPTO.encrypt (RAWTOHEX ('FFBED811B269AB47E053051D0B0A3F17'), 6 + 256 + 4096, RAWTOHEX('4456445677897789'), RAWTOHEX('1234567812345678')))))
,'+','%2B')
id from dual;