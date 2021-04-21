<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">parse</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required inString</value>
    <value>[i] field:0:optional outputRecord {"true","false"}</value>
    <value>[i] field:0:optional maxLength</value>
    <value>[i] field:0:optional delimitor</value>
    <value>[i] record:1:optional fields</value>
    <value>[i] - field:0:required name</value>
    <value>[i] - field:0:optional startIndex</value>
    <value>[i] - field:0:optional length</value>
    <value>[i] field:0:optional ignoreWhitespace {"true","false"}</value>
    <value>[o] record:0:optional record</value>
    <value>[o] field:1:optional list</value>
  </array>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">SURhdGFDdXJzb3IgY3Vyc29yID0gcGlwZWxpbmUuZ2V0Q3Vyc29yKCk7DQoNClN0cmluZyBsaW5l
ID0gIiI7DQpib29sZWFuIG91dHB1dFJlY29yZCA9IHRydWU7DQpib29sZWFuIGlnbm9yZVdoaXRl
c3BhY2UgPSB0cnVlOw0KU3RyaW5nIGRlbGltaXRvciA9IG51bGw7DQpTdHJpbmdbXSB0b2tlbnMg
PSBudWxsOw0KDQppZiAoY3Vyc29yLmZpcnN0KCJpblN0cmluZyIpKQ0Kew0KICBsaW5lID0gKFN0
cmluZykgY3Vyc29yLmdldFZhbHVlKCk7DQogIGlmIChjdXJzb3IuZmlyc3QoImlnbm9yZVdoaXRl
c3BhY2UiKSkNCiAgew0KICAgIGlnbm9yZVdoaXRlc3BhY2UgPSBCb29sZWFuLnZhbHVlT2YoKFN0
cmluZykgY3Vyc29yLmdldFZhbHVlKCkpLmJvb2xlYW5WYWx1ZSgpOw0KICB9DQoNCiAgaWYgKGN1
cnNvci5maXJzdCgib3V0cHV0UmVjb3JkIikpDQogIHsNCiAgICBvdXRwdXRSZWNvcmQgPSBCb29s
ZWFuLnZhbHVlT2YoKFN0cmluZykgY3Vyc29yLmdldFZhbHVlKCkpLmJvb2xlYW5WYWx1ZSgpOw0K
ICB9DQoNCiAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIHRva2VucyBmcm9tIHRoZSBTdHJpbmcgdXNp
bmcgdGhlIGRlbGltaXRvcg0KICBpZiAoY3Vyc29yLmZpcnN0KCJkZWxpbWl0b3IiKSkNCiAgew0K
ICAgIGRlbGltaXRvciA9IChTdHJpbmcpIGN1cnNvci5nZXRWYWx1ZSgpOw0KICAgIGlmIChkZWxp
bWl0b3IgIT0gbnVsbCAmJiBkZWxpbWl0b3IubGVuZ3RoKCkgPiAwKQ0KICAgIHsNCiAgICAgIHRv
a2VucyA9IHRva2VuaXplKGxpbmUsIGRlbGltaXRvcik7DQogICAgfQ0KICB9DQoNCiAgLy8gSWYg
dGhlIG91dHB1dCBpcyB0byBiZSBpbiBhIHJlY29yZCBmb3JtYXQNCiAgaWYgKG91dHB1dFJlY29y
ZCkNCiAgew0KICAgIC8vIENyZWF0ZSB0aGUgb3V0cHV0IHJlY29yZCB0byBob2xkIHRoZSBmaWVs
ZHMNCiAgICBJRGF0YSBvdXRSZWNvcmQgPSBJRGF0YUZhY3RvcnkuY3JlYXRlKCk7DQogICAgSURh
dGFDdXJzb3Igb3V0UmVjb3JkQ3Vyc29yID0gb3V0UmVjb3JkLmdldEN1cnNvcigpOw0KDQogICAg
aWYgKGN1cnNvci5maXJzdCgiZmllbGRzIikpDQogICAgew0KICAgICAgLy8gR2V0IHRoZSBmaWVs
ZHMgbGlzdA0KICAgICAgSURhdGFbXSBmaWVsZHMgPSAoSURhdGFbXSkgY3Vyc29yLmdldFZhbHVl
KCk7DQogICAgICBmb3IgKGludCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykNCiAgICAg
IHsNCiAgICAgICAgLy8gRXh0cmFjdCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBmaWVsZA0KICAg
ICAgICBJRGF0YUN1cnNvciBmaWVsZEN1cnNvciA9IGZpZWxkc1tpXS5nZXRDdXJzb3IoKTsNCiAg
ICAgICAgdHJ5DQogICAgICAgIHsNCiAgICAgICAgICBpZiAoZGVsaW1pdG9yICE9IG51bGwgJiYg
ZGVsaW1pdG9yLmxlbmd0aCgpID4gMCkNCiAgICAgICAgICB7DQogICAgICAgICAgICBTdHJpbmcg
bmFtZSA9IG51bGw7DQogICAgICAgICAgICBpZiAoZmllbGRDdXJzb3IuZmlyc3QoIm5hbWUiKSkN
CiAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgbmFtZSA9IChTdHJpbmcpIGZpZWxkQ3Vyc29y
LmdldFZhbHVlKCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlDQogICAgICAgICAg
ICB7DQogICAgICAgICAgICAgIHRocm93IG5ldyBCYWRGaWVsZEV4Y2VwdGlvbigiRmllbGQgZG9l
cyBub3QgaGF2ZSBhICduYW1lJyBhdHRyaWJ1dGUiKTsNCiAgICAgICAgICAgIH0NCg0KICAgICAg
ICAgICAgU3RyaW5nIHRva2VuID0gdG9rZW5zW2ldOw0KICAgICAgICAgICAgb3V0UmVjb3JkQ3Vy
c29yLmluc2VydEFmdGVyKG5hbWUsIGlnbm9yZVdoaXRlc3BhY2UgPyB0b2tlbi50cmltKCkubGVu
Z3RoKCkgPiAwID8gdG9rZW4udHJpbSgpIDogbnVsbCA6IHRva2VuKTsNCiAgICAgICAgICB9DQog
ICAgICAgICAgZWxzZQ0KICAgICAgICAgIHsNCiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGZpZWxk
IG9iamVjdCBmcm9tIHRoZSBpbnB1dCB2YWx1ZXMNCiAgICAgICAgICAgIEZpZWxkIGZpZWxkID0g
bmV3IEZpZWxkKGZpZWxkQ3Vyc29yKTsNCiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZml4
ZWQgbGVuZ3RoIHBvc2l0aW9ucyBvZiB0aGlzIGZpZWxkDQogICAgICAgICAgICBpbnQgc3RhcnRJ
bmRleCA9IGZpZWxkLmdldFN0YXJ0SW5kZXgoKTsNCiAgICAgICAgICAgIGludCBlbmRJbmRleCA9
IGZpZWxkLmdldFN0YXJ0SW5kZXgoKSArIGZpZWxkLmdldExlbmd0aCgpOw0KDQogICAgICAgICAg
ICBpZiAoc3RhcnRJbmRleCA+IGxpbmUubGVuZ3RoKCkpDQogICAgICAgICAgICB7DQogICAgICAg
ICAgICAgIG91dFJlY29yZEN1cnNvci5pbnNlcnRBZnRlcihmaWVsZC5nZXROYW1lKCksIG51bGwp
Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSBpZiAoZW5kSW5kZXggPj0gbGluZS5s
ZW5ndGgoKSkNCiAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgU3RyaW5nIHZhbHVlID0gbGlu
ZS5zdWJzdHJpbmcoc3RhcnRJbmRleCk7DQogICAgICAgICAgICAgIG91dFJlY29yZEN1cnNvci5p
bnNlcnRBZnRlcihmaWVsZC5nZXROYW1lKCksIGlnbm9yZVdoaXRlc3BhY2UgPyB2YWx1ZS50cmlt
KCkubGVuZ3RoKCkgPiAwID8gdmFsdWUudHJpbSgpIDogbnVsbCA6IHZhbHVlKTsNCiAgICAgICAg
ICAgIH0NCiAgICAgICAgICAgIGVsc2UNCiAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgU3Ry
aW5nIHZhbHVlID0gbGluZS5zdWJzdHJpbmcoc3RhcnRJbmRleCwgZW5kSW5kZXgpOw0KICAgICAg
ICAgICAgICBvdXRSZWNvcmRDdXJzb3IuaW5zZXJ0QWZ0ZXIoZmllbGQuZ2V0TmFtZSgpLCBpZ25v
cmVXaGl0ZXNwYWNlID8gdmFsdWUudHJpbSgpLmxlbmd0aCgpID4gMCA/IHZhbHVlLnRyaW0oKSA6
IG51bGwgOiB2YWx1ZSk7DQogICAgICAgICAgICB9DQogICAgICAgICAgfQ0KICAgICAgICB9DQog
ICAgICAgIGNhdGNoIChCYWRGaWVsZEV4Y2VwdGlvbiBiZmUpDQogICAgICAgIHsNCiAgICAgICAg
ICB0aHJvdyBuZXcgU2VydmljZUV4Y2VwdGlvbihiZmUuZ2V0TWVzc2FnZSgpKTsNCiAgICAgICAg
fQ0KICAgICAgICBmaWVsZEN1cnNvci5kZXN0cm95KCk7DQogICAgICB9DQogICAgfQ0KICAgIGVs
c2UNCiAgICB7DQogICAgICB0aHJvdyBuZXcgU2VydmljZUV4Y2VwdGlvbigiSW5wdXQgJ2ZpZWxk
cycgbXVzdCBleGlzdCB3aGVuIG91dHB1dFJlY29yZCBpcyBzZXQgdG8gJ3RydWUnIik7DQogICAg
fQ0KDQogICAgb3V0UmVjb3JkQ3Vyc29yLmRlc3Ryb3koKTsNCiAgICBJRGF0YVV0aWwucHV0KGN1
cnNvciwgInJlY29yZCIsIG91dFJlY29yZCk7DQogIH0NCiAgZWxzZQ0KICB7DQogICAgLy8gU2lt
cGxlIFN0cmluZyBMaXN0IG5lZWRlZA0KICAgIFN0cmluZ1tdIGFycmF5Ow0KDQogICAgaWYgKGRl
bGltaXRvciAhPSBudWxsICYmIGRlbGltaXRvci5sZW5ndGgoKSA+IDApDQogICAgew0KICAgICAg
YXJyYXkgPSBuZXcgU3RyaW5nW3Rva2Vucy5sZW5ndGhdOw0KICAgICAgZm9yIChpbnQgaSA9IDA7
IGkgPCBhcnJheS5sZW5ndGg7IGkrKykNCiAgICAgIHsNCiAgICAgICAgYXJyYXlbaV0gPSBpZ25v
cmVXaGl0ZXNwYWNlID8gdG9rZW5zW2ldLnRyaW0oKS5sZW5ndGgoKSA+IDAgPyB0b2tlbnNbaV0u
dHJpbSgpIDogbnVsbCA6IHRva2Vuc1tpXTsNCiAgICAgIH0NCiAgICB9DQogICAgZWxzZQ0KICAg
IHsNCiAgICAgIGludCBtYXhMZW5ndGggPSAwOw0KDQogICAgICBpZiAoY3Vyc29yLmZpcnN0KCJt
YXhMZW5ndGgiKSkNCiAgICAgIHsNCiAgICAgICAgbWF4TGVuZ3RoID0gSW50ZWdlci5wYXJzZUlu
dCgoU3RyaW5nKSBjdXJzb3IuZ2V0VmFsdWUoKSk7DQogICAgICB9DQoNCiAgICAgIGlmIChtYXhM
ZW5ndGggPD0gMCkNCiAgICAgIHsNCiAgICAgICAgdGhyb3cgbmV3IFNlcnZpY2VFeGNlcHRpb24o
IklucHV0ICdtYXhMZW5ndGgnIG9yICdkZWxpbWl0b3InIG11c3QgZXhpc3Qgd2hlbiBvdXRwdXRS
ZWNvcmQgaXMgc2V0IHRvICdmYWxzZSciKTsNCiAgICAgIH0NCg0KICAgICAgYXJyYXkgPSBuZXcg
U3RyaW5nW2xpbmUubGVuZ3RoKCkgLyBtYXhMZW5ndGggKyAxXTsNCiAgICAgIGZvciAoaW50IGkg
PSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspDQogICAgICB7DQogICAgICAgIGlmICgoaSArIDEp
ICogbWF4TGVuZ3RoID4gbGluZS5sZW5ndGgoKSkNCiAgICAgICAgew0KICAgICAgICAgIFN0cmlu
ZyB2YWx1ZSA9IGxpbmUuc3Vic3RyaW5nKGkgKiBtYXhMZW5ndGgpOw0KICAgICAgICAgIGFycmF5
W2ldID0gaWdub3JlV2hpdGVzcGFjZSA/IHZhbHVlLnRyaW0oKS5sZW5ndGgoKSA+IDAgPyB2YWx1
ZS50cmltKCkgOiBudWxsIDogdmFsdWU7DQogICAgICAgIH0NCiAgICAgICAgZWxzZQ0KICAgICAg
ICB7DQogICAgICAgICAgU3RyaW5nIHZhbHVlID0gbGluZS5zdWJzdHJpbmcoaSAqIG1heExlbmd0
aCwgKGkgKyAxKSAqIG1heExlbmd0aCk7DQogICAgICAgICAgYXJyYXlbaV0gPSBpZ25vcmVXaGl0
ZXNwYWNlID8gdmFsdWUudHJpbSgpLmxlbmd0aCgpID4gMCA/IHZhbHVlLnRyaW0oKSA6IG51bGwg
OiB2YWx1ZTsNCiAgICAgICAgfQ0KICAgICAgfQ0KICAgIH0NCiAgICBJRGF0YVV0aWwucHV0KGN1
cnNvciwgImxpc3QiLCBhcnJheSk7DQogIH0NCn0NCmVsc2UNCnsNCiAgdGhyb3cgbmV3IFNlcnZp
Y2VFeGNlcHRpb24oIk1pc3NpbmcgaW5wdXQgJ2luU3RyaW5nJyIpOw0KfQ0KDQpjdXJzb3IuZGVz
dHJveSgpOw0K</value>
</Values>
