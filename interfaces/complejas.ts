(() => {
  interface Client {
    name: string;
    age: number;
    address?: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Fran',
    age: 25,
    address: {
      id: 1234,
      zip: 'KY2 SUD',
      city: 'Ottawa',
    },

    getFullAddress() {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: 'Maria',
    age: 30,
    address: {
      id: 1234,
      zip: 'KY2 SUD',
      city: 'Ottawa',
    },
    getFullAddress() {
      return this.address.city;
    },
  };
})();
