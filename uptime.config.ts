const config = {
  // Your locale for server-side callback. (client-side will always follow browser settings)
  dateLocale: 'en-GB',
  // Your timezone for server-side callback. (client-side will always follow browser settings)
  timezone: 'Asia/Ho_Chi_Minh',
  page: {
    // Title for your status page
    title: "NextDNS",
    // Links shown at the header of your status page, could set `highlight` to `true`
    links: [
    ],
  },
  callback: async (statusChangeMsg: string) => {
    // Write any typescript here
    // Example `statusChangeMsg` string:
    // "❌My Blog went down at 2023/11/18 14:08:59 with error Timeout after 10000ms"
    // "✔️My Blog came back up at 2023/11/18 14:10:48 after 2 minutes of downtime"
    // Example:
    // await fetch('https://api.example.com/callback?msg=' + statusChangeMsg)
  },
  // Define all your monitors here
  monitors: [
    {
      id: 'hochiminh-lightnode',
      name: 'Hồ Chí Minh LightNode',
      method: 'GET',
      target: 'https://lightnode-sgn-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'lightnode-sgn-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
    {
      id: 'hochiminh-greencloud',
      name: 'Hồ Chí Minh GreenCloud',
      method: 'GET',
      target: 'https://greencloud-sgn-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'greencloud-sgn-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
    {
      id: 'hanoi-lightnode',
      name: 'Hà Nội LightNode',
      method: 'GET',
      target: 'https://lightnode-han-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'lightnode-han-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
    {
      id: 'hanoi-greencloud',
      name: 'Hà Nội GreenCloud',
      method: 'GET',
      target: 'https://greencloud-han-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'greencloud-han-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
    {
      id: 'zepto-sin',
      name: 'Singapore Zepto',
      method: 'GET',
      target: 'https://zepto-sin-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'greencloud-han-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
    {
      id: 'vultr-sin',
      name: 'Singapore Vultr',
      method: 'GET',
      target: 'https://vultr-sin-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'vultr-sin-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
    {
      id: 'anexia-sin',
      name: 'Singapore Anexia',
      method: 'GET',
      target: 'https://anexia-sin-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'anexia-sin-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
    {
      id: 'anexia-hkg',
      name: 'HongKong Anexia',
      method: 'GET',
      target: 'https://anexia-hkg-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'anexia-hkg-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
    {
      id: 'zepto-hkg',
      name: 'HongKong Zepto',
      method: 'GET',
      target: 'https://zepto-hkg-1.edge.nextdns.io/resolve?name=google.com',
      tooltip: 'zepto-hkg-1.edge.nextdns.io',
      expectedCodes: [200],
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      },
      timeout: 20000,
    },
  ],
}

// Don't forget this, otherwise compilation fails.
export default config
