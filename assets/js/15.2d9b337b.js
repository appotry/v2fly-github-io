(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{402:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dns-域名解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-域名解析"}},[t._v("#")]),t._v(" DNS 域名解析")]),t._v(" "),a("p",[t._v("V2Ray 内建了一个 DNS 组件，其主要用途为：对目标地址（域名）进行 DNS 解析，同时为 IP 路由规则匹配提供判断依据。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("由于 DNS 协议的复杂性，V2Ray 只支持最基本的 IP 查询（A 和 AAAA 记录）。如需完整的 DNS 功能，推荐使用 "),a("a",{attrs:{href:"https://coredns.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoreDNS"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("freedom")]),t._v(" 协议的 "),a("code",[t._v("outbound")]),t._v(" 中，"),a("code",[t._v("domainStrategy")]),t._v(" 默认值为 "),a("code",[t._v("AsIs")]),t._v("，即 "),a("code",[t._v("freedom")]),t._v(" outbound 默认不会使用本 DNS 组件进行目标地址解析。如需使用，应修改 "),a("code",[t._v("freedom")]),t._v(" outbound 中的 "),a("code",[t._v("domainStrategy")]),t._v(" 配置为 "),a("code",[t._v("UseIP")]),t._v("、"),a("code",[t._v("UseIPv4")]),t._v(" 或 "),a("code",[t._v("UseIPv6")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"支持的-dns-协议及其路由策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的-dns-协议及其路由策略"}},[t._v("#")]),t._v(" 支持的 DNS 协议及其路由策略")]),t._v(" "),a("ul",[a("li",[t._v("DNS over "),a("strong",[t._v("UDP")]),t._v("：查询请求经过路由组件，可从用户指定 outbound 发出\n"),a("ul",[a("li",[t._v("使用 IP 地址的形式，如 "),a("code",[t._v("8.8.8.8")])]),t._v(" "),a("li",[t._v("默认使用 "),a("code",[t._v("53")]),t._v(" 端口进行查询，支持使用非标准端口")])])]),t._v(" "),a("li",[t._v("DNS over "),a("strong",[t._v("TCP")]),t._v("：查询请求经过路由组件，可从用户指定 outbound 发出\n"),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("tcp://host:port")]),t._v(" 的形式，如 "),a("code",[t._v("tcp://8.8.8.8:53")])]),t._v(" "),a("li",[t._v("默认使用 "),a("code",[t._v("53")]),t._v(" 端口进行查询，支持使用非标准端口")]),t._v(" "),a("li",[t._v("v4.40.0 及以上版本可使用")])])]),t._v(" "),a("li",[t._v("DNS over "),a("strong",[t._v("TCP local mode")]),t._v("：查询请求不经过路由组件，直接从 freedom outbound 发出\n"),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("tcp+local://host:port")]),t._v(" 的形式，如 "),a("code",[t._v("tcp+local://8.8.8.8:53")])]),t._v(" "),a("li",[t._v("默认使用 "),a("code",[t._v("53")]),t._v(" 端口进行查询，支持使用非标准端口")]),t._v(" "),a("li",[t._v("v4.40.0 及以上版本可使用")])])]),t._v(" "),a("li",[t._v("DNS over "),a("strong",[t._v("HTTPS")]),t._v("：查询请求经过路由组件，可从用户指定 outbound 发出\n"),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("https://host:port/dns-query")]),t._v(" 的形式，如 "),a("code",[t._v("https://dns.google/dns-query")]),t._v(" 或 "),a("code",[t._v("https://1.1.1.1/dns-query")])]),t._v(" "),a("li",[t._v("默认使用 "),a("code",[t._v("443")]),t._v(" 端口进行查询，支持使用非标准端口和非标准路径，如 "),a("code",[t._v("https://a.b.c.d:8443/my-dns-query")])]),t._v(" "),a("li",[t._v("v4.22.0 及以上版本可使用")])])]),t._v(" "),a("li",[t._v("DNS over "),a("strong",[t._v("HTTPS local mode")]),t._v("：查询请求不经过路由组件，直接从 freedom outbound 发出\n"),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("https+local://host:port/dns-query")]),t._v(" 的形式，如 "),a("code",[t._v("https+local://223.5.5.5/dns-query")])]),t._v(" "),a("li",[t._v("默认使用 "),a("code",[t._v("443")]),t._v(" 端口进行查询，支持使用非标准端口和非标准路径，如 "),a("code",[t._v("https+local://a.b.c.d:8443/my-dns-query")])]),t._v(" "),a("li",[t._v("v4.22.0 及以上版本可使用")])])]),t._v(" "),a("li",[t._v("DNS over "),a("strong",[t._v("QUIC local mode")]),t._v("：查询请求不经过路由组件，直接从 freedom outbound 发出\n"),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("quic+local://host")]),t._v(" 的形式，如 "),a("code",[t._v("quic+local://dns.adguard.com")])]),t._v(" "),a("li",[t._v("默认使用 "),a("code",[t._v("784")]),t._v(" 端口进行查询，支持使用非标准端口")]),t._v(" "),a("li",[t._v("目前（2021 年 9 月 20 日），公共递归 DNS 服务中支持 DNS over QUIC 协议的有 "),a("code",[t._v("dns.adguard.com")]),t._v(" 与 "),a("code",[t._v("dns.nextdns.io")]),t._v("（除 784 端口外，亦支持使用 8853 端口查询）")]),t._v(" "),a("li",[t._v("v4.34.0 及以上版本可使用")])])]),t._v(" "),a("li",[t._v("特殊项：\n"),a("ul",[a("li",[a("strong",[t._v("localhost")]),t._v("：使用本机预设的 DNS 配置")]),t._v(" "),a("li",[a("strong",[t._v("FakeDNS")]),t._v("：使用 V2Ray 内建的 FakeDNS 服务器。详情见 "),a("RouterLink",{attrs:{to:"/config/fakedns.html"}},[t._v("FakeDNS 服务器")]),t._v("。v4.35.0 及以上版本可使用")],1)])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当使用 "),a("code",[t._v("localhost")]),t._v(" 时，本机的 DNS 请求不受 V2Ray 控制，需要额外的配置才可以使 DNS 请求由 V2Ray 转发。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果在 Linux 设备上使用 DNS over QUIC，可能需要调整接收缓冲区大小，下面的命令将其设置为 2.5 MB")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("sysctl -w net.core.rmem_max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2500000")]),t._v("\n")])])]),a("p",[t._v("Reference: "),a("a",{attrs:{href:"https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"dns-处理流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-处理流程"}},[t._v("#")]),t._v(" DNS 处理流程")]),t._v(" "),a("p",[t._v("若当前要查询的域名：")]),t._v(" "),a("ul",[a("li",[t._v("命中了 "),a("code",[t._v("hosts")]),t._v(" 中的「域名 - IP」、「域名 - IP 数组」映射，则将该 IP 或 IP 数组作为 DNS 解析结果返回。")]),t._v(" "),a("li",[t._v("命中了 "),a("code",[t._v("hosts")]),t._v(" 中的「域名 - 域名」映射，则该映射的值（另一个域名）将作为当前要查询的新域名，进入 DNS 处理流程，直到解析出 IP 后返回，或返回空解析。")]),t._v(" "),a("li",[t._v("没有命中 "),a("code",[t._v("hosts")]),t._v("，但命中了某（几）个 DNS 服务器中的 "),a("code",[t._v("domains")]),t._v(" 域名列表，则按照命中的规则的优先级，依次使用该规则对应的 DNS 服务器进行查询。若命中的 DNS 服务器查询失败，或 "),a("code",[t._v("expectIPs")]),t._v(" 不匹配，则使用下一个命中的 DNS 服务器进行查询；否则返回解析得到的 IP。若所有命中的 DNS 服务器均查询失败，此时 DNS 组件：\n"),a("ul",[a("li",[t._v("默认会进行 「DNS 回退（fallback）查询」：使用「上一轮失败查询中未被使用的、且 "),a("code",[t._v("skipFallback")]),t._v(" 为默认值 "),a("code",[t._v("false")]),t._v(" 的 DNS 服务器」依次查询。若查询失败，或 "),a("code",[t._v("expectIPs")]),t._v(" 不匹配，返回空解析；否则返回解析得到的 IP。")]),t._v(" "),a("li",[t._v("若 "),a("code",[t._v("disableFallback")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("，则不会进行「DNS 回退（fallback）查询」。")])])]),t._v(" "),a("li",[t._v("既没有命中 "),a("code",[t._v("hosts")]),t._v("，又没有命中 DNS 服务器中的 "),a("code",[t._v("domains")]),t._v(" 域名列表，则：\n"),a("ul",[a("li",[t._v("默认使用「"),a("code",[t._v("skipFallback")]),t._v(" 为默认值 "),a("code",[t._v("false")]),t._v(" 的 DNS 服务器」依次查询。若第一个被选中的 DNS 服务器查询失败，或 "),a("code",[t._v("expectIPs")]),t._v(" 不匹配，则使用下一个被选中的 DNS 服务器进行查询；否则返回解析得到的 IP。若所有被选中的 DNS 服务器均查询失败，返回空解析。")]),t._v(" "),a("li",[t._v("若「"),a("code",[t._v("skipFallback")]),t._v(" 为默认值 "),a("code",[t._v("false")]),t._v(" 的 DNS 服务器」数量为 0 或 "),a("code",[t._v("disableFallback")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("，则使用 DNS 配置中的第一个 DNS 服务器进行查询。查询失败或不匹配 "),a("code",[t._v("expectIPs")]),t._v(" 列表，返回空解析；否则返回解析得到的 IP。")])])])]),t._v(" "),a("p",[t._v("DNS 处理流程示意图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/dns_flowchart_20210418.svg",alt:"DNS resolution process"}})]),t._v(" "),a("h2",{attrs:{id:"dnsobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dnsobject"}},[t._v("#")]),t._v(" DnsObject")]),t._v(" "),a("p",[a("code",[t._v("DnsObject")]),t._v(" 对应配置文件的 "),a("code",[t._v("dns")]),t._v(" 项。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hosts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baidu.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"example.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"::1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxy.example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.2"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns.google"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxy.example.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"geosite:test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another-proxy.example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"geosite:category-ads-all"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"::1"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://dns.google/dns-query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"223.5.5.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5.6.7.8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipFallback"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:customizedGeoIPFile.dat:cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext-ip:customizedGeoIPFile.dat:cn"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fakedns"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:v2fly.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:geolocation-!cn"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://1.1.1.1/dns-query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:v2fly.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:geolocation-!cn"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:!cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:customizedGeoIPFile.dat:!cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext-ip:customizedGeoIPFile.dat:!cn"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"queryStrategy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UseIPv4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disableCache"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disableFallback"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns_inbound"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("hosts")]),t._v(": map{string: address} | map{string: [address]}")])]),t._v(" "),a("p",[t._v("域名与地址的映射，其值可为「域名与单个地址」的映射、「域名与多个地址（地址数组）的映射」(v4.37.3+)，其中地址可以是 IP 或域名。")]),t._v(" "),a("p",[t._v("在解析域名时，如果域名匹配这个列表中的某一项，当该项的地址为 IP 时，则解析结果为该项的 IP，而不会进行后续的 DNS 解析；当该项的地址为域名时，会使用此域名进行后续的 DNS 解析，而不使用原始域名。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当地址中同时设置了多个 IP 和域名，则只会返回第一个域名，其余 IP 和域名均被忽略。")])]),t._v(" "),a("p",[t._v("域名的格式有以下几种形式：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("纯字符串")]),t._v("：当此域名完整匹配目标域名时，该规则生效。例如 "),a("code",[t._v("v2ray.com")]),t._v(" 匹配 "),a("code",[t._v("v2ray.com")]),t._v(" 但不匹配 "),a("code",[t._v("www.v2ray.com")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("正则表达式")]),t._v("：由 "),a("code",[t._v("regexp:")]),t._v(" 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "),a("code",[t._v("regexp:\\.goo.*\\.com$")]),t._v(" 匹配 "),a("code",[t._v("www.google.com")]),t._v("、"),a("code",[t._v("fonts.googleapis.com")]),t._v("，但不匹配 "),a("code",[t._v("google.com")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("子域名 (推荐)")]),t._v("：由 "),a("code",[t._v("domain:")]),t._v(" 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "),a("code",[t._v("domain:v2ray.com")]),t._v(" 匹配 "),a("code",[t._v("www.v2ray.com")]),t._v("、"),a("code",[t._v("v2ray.com")]),t._v("，但不匹配 "),a("code",[t._v("xv2ray.com")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("子串")]),t._v("：由 "),a("code",[t._v("keyword:")]),t._v(" 开始，余下部分是一个字符串。当此字符串匹配目标域名中任意部分，该规则生效。比如 "),a("code",[t._v("keyword:sina.com")]),t._v(" 可以匹配 "),a("code",[t._v("sina.com")]),t._v("、"),a("code",[t._v("sina.com.cn")]),t._v("、"),a("code",[t._v("www.sina.com")]),t._v(" 和 "),a("code",[t._v("www.sina.company")]),t._v("，但不匹配 "),a("code",[t._v("sina.cn")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("预定义域名列表")]),t._v("：由 "),a("code",[t._v("geosite:")]),t._v(" 开头，余下部分是一个名称，如 "),a("code",[t._v("geosite:google")]),t._v(" 或者 "),a("code",[t._v("geosite:cn")]),t._v("。名称及域名列表参考 "),a("RouterLink",{attrs:{to:"/config/routing.html#预定义域名列表"}},[t._v("预定义域名列表")]),t._v("。")],1)]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("servers")]),t._v(": [string | "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("DNS 服务器列表，有效的写法有两种：DNS 地址（字符串形式）和 "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" 。")]),t._v(" "),a("p",[t._v("详情查看"),a("a",{attrs:{href:"#%E6%94%AF%E6%8C%81%E7%9A%84-dns-%E5%8D%8F%E8%AE%AE%E5%8F%8A%E5%85%B6%E8%B7%AF%E7%94%B1%E7%AD%96%E7%95%A5"}},[t._v("支持的 DNS 协议及其路由策略")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("clientIp")]),t._v(": string")])]),t._v(" "),a("p",[t._v("当前网络的 IP 地址。用于 DNS 查询时通知 DNS 服务器，客户端所在的地理位置（不能是私有 IP 地址）。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("此功能需要 DNS 服务器支持 EDNS Client Subnet（RFC7871）。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("queryStrategy")]),t._v(': "UseIP" | "UseIPv4" | "UseIPv6"')])]),t._v(" "),a("p",[t._v("(4.37.0+) DNS 查询所使用的网络类型。默认值为 "),a("code",[t._v("UseIP")]),t._v("，即 DNS 同时查询域名的 A 和 AAAA 记录。"),a("code",[t._v("UseIPv4")]),t._v(" 和 "),a("code",[t._v("UseIPv6")]),t._v(" 分别为只查询 A 记录、只查询 AAAA 记录。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("建议没有 IPv6 网络的用户，设置为 "),a("code",[t._v("UseIPv4")]),t._v("。本选项与 "),a("code",[t._v("freedom")]),t._v(" 协议 "),a("code",[t._v("outbound")]),t._v(" 中的 "),a("code",[t._v("domainStrategy")]),t._v(" 选项优先级相同，建议同时设置为 "),a("code",[t._v("UseIPv4")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果本选项设置为 "),a("code",[t._v("UseIPv4")]),t._v("，而 "),a("code",[t._v("freedom")]),t._v(" 协议 "),a("code",[t._v("outbound")]),t._v(" 中的 "),a("code",[t._v("domainStrategy")]),t._v(" 选项设置为 "),a("code",[t._v("UseIPv6")]),t._v("，会导致从 "),a("code",[t._v("freedom")]),t._v(" 协议 "),a("code",[t._v("outbound")]),t._v(" 发出的连接的 DNS 查询被 Go 运行时接管，进而导致 DNS 泄漏；反之同理。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("disableCache")]),t._v(": bool")])]),t._v(" "),a("p",[t._v("(4.35.0+) 禁用 DNS 缓存。默认为 false，即为不禁用。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("disableFallback")]),t._v(": bool")])]),t._v(" "),a("p",[t._v("(4.37.2+) 禁用 DNS 回退（fallback）查询。默认为 false，即为不禁用。详情见 "),a("a",{attrs:{href:"#dns-%E5%A4%84%E7%90%86%E6%B5%81%E7%A8%8B"}},[t._v("DNS 处理流程")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果本选项设置为 "),a("code",[t._v("true")]),t._v("，则 "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" 中的 "),a("code",[t._v("skipFallback")]),t._v(" 均不会生效。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("disableFallbackIfMatch")]),t._v(": bool")])]),t._v(" "),a("p",[t._v("(4.40.2+)   禁用在 DNS 服务器的优先匹配域名列表命中时执行 DNS 回退（fallback）查询。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("（V2Ray 4.13+）由此 DNS 发出的查询流量，除 "),a("code",[t._v("localhost")]),t._v(" 和 "),a("code",[t._v("DOHL_")]),t._v(" 模式外，都会带有此标识，可在路由使用 "),a("code",[t._v("inboundTag")]),t._v(" 进行匹配。")]),t._v(" "),a("h2",{attrs:{id:"serverobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"223.5.5.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5.6.7.8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipFallback"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:customizedGeoIPFile.dat:cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext-ip:customizedGeoIPFile.dat:cn"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": string")])]),t._v(" "),a("p",[t._v("DNS 服务器地址，如 "),a("code",[t._v("8.8.8.8")]),t._v("、"),a("code",[t._v("tcp+local://8.8.8.8:53")]),t._v(" 和 "),a("code",[t._v("https://dns.google/dns-query")]),t._v(" 等，详情查看"),a("a",{attrs:{href:"#%E6%94%AF%E6%8C%81%E7%9A%84-dns-%E5%8D%8F%E8%AE%AE%E5%8F%8A%E5%85%B6%E8%B7%AF%E7%94%B1%E7%AD%96%E7%95%A5"}},[t._v("支持的 DNS 协议及其路由策略")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": number")])]),t._v(" "),a("p",[t._v("DNS 服务器端口，如 "),a("code",[t._v("53")]),t._v("。此项缺省时默认为 "),a("code",[t._v("53")]),t._v("。当使用 DOH、DOHL、DOQL 模式时，该项无效。非标准端口应在 URL 中指定。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("clientIp")]),t._v(": string")])]),t._v(" "),a("p",[t._v("当前网络的 IP 地址。用于 DNS 查询时通知 DNS 服务器，客户端所在的地理位置（不能是私有 IP 地址）。此处 "),a("code",[t._v("clientIp")]),t._v(" 的优先级高于外层配置的 "),a("code",[t._v("clientIp")]),t._v("，由此可实现「使用不同的 "),a("code",[t._v("clientIp")]),t._v(" 从相同的 DNS 服务器获取同一域名在不同地区的解析结果」。 (4.34.0+)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("此功能需要 DNS 服务器支持 EDNS Client Subnet（RFC7871）。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("skipFallback")]),t._v(": bool")])]),t._v(" "),a("p",[t._v("(4.37.2+) 在 DNS 回退（fallback）查询过程中，是否跳过本 DNS。默认为 false，即为不跳过。详情见 "),a("a",{attrs:{href:"#dns-%E5%A4%84%E7%90%86%E6%B5%81%E7%A8%8B"}},[t._v("DNS 处理流程")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("本选项可用于防止 DNS 回退（fallback）查询 "),a("code",[t._v("A")]),t._v(" 和 "),a("code",[t._v("AAAA")]),t._v(" 记录过程中的 DNS 泄漏。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果 "),a("a",{attrs:{href:"#dnsobject"}},[t._v("DnsObject")]),t._v(" 中的 "),a("code",[t._v("disableFallback")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("，则本选项不会生效。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("domains")]),t._v(": [string]")])]),t._v(" "),a("p",[t._v("一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。域名格式和"),a("RouterLink",{attrs:{to:"/config/routing.html#ruleobject"}},[t._v("路由配置")]),t._v("中相同。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("expectIPs")]),t._v(":[string]")])]),t._v(" "),a("p",[t._v("（V2Ray 4.22.0+）一个 IP 范围列表，格式和"),a("RouterLink",{attrs:{to:"/config/routing.html#ruleobject"}},[t._v("路由配置")]),t._v("中相同。")],1),t._v(" "),a("p",[t._v("当配置此项时，V2Ray DNS 会对返回的 IP 进行校验，只返回满足 expectIPs 列表的地址。如果未配置此项，会原样返回 IP 地址。")])])}),[],!1,null,null,null);s.default=n.exports}}]);