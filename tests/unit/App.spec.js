import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import App from "@/App.vue";

describe("App.vue", () => {
    it("fetches users and renders them", async () => {
        window.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        results: [
                            {
                                login: { uuid: "1" },
                                name: { first: "Alice", last: "Smith" },
                                picture: { large: "" },
                                location: {
                                    street: { number: 123, name: "Main St" },
                                    postcode: "12345",
                                    city: "Townsville",
                                    country: "Wonderland",
                                },
                                phone: "123-456-7890",
                            },
                        ],
                    }),
            })
        );

        const wrapper = mount(App);
        await flushPromises();
        await wrapper.vm.$nextTick();

        expect(wrapper.text()).toContain("Alice Smith");
    });

    describe("Sorting users", () => {
        const users = [
            {
                name: { first: "Zoe", last: "A" },
                login: { uuid: "2" },
                picture: { large: "" },
                location: {
                    street: { number: 123, name: "Main St" },
                    postcode: "12345",
                    city: "Townsville",
                    country: "Wonderland",
                },
                phone: "123-456-7890",
            },
            {
                name: { first: "Ben", last: "B" },
                login: { uuid: "1" },
                picture: { large: "" },
                location: {
                    street: { number: 123, name: "Main St" },
                    postcode: "12345",
                    city: "Townsville",
                    country: "Wonderland",
                },
                phone: "123-456-7890",
            },
            {
                name: { first: "Alice", last: "C" },
                login: { uuid: "3" },
                picture: { large: "" },
                location: {
                    street: { number: 123, name: "Main St" },
                    postcode: "12345",
                    city: "Townsville",
                    country: "Wonderland",
                },
                phone: "123-456-7890",
            },
        ];

        it("sorts users by first name ascending", async () => {
            const wrapper = mount(App, {
                data() {
                    return {
                        users,
                        sortOrder: "asc",
                    };
                },
            });

            await wrapper.vm.$nextTick();

            const sortedFirstNames = wrapper.vm.sortedUsers.map((u) => u.name.first);
            expect(sortedFirstNames).toEqual(["Alice", "Ben", "Zoe"]);
        });

        it("sorts users by first name descending", async () => {
            const wrapper = mount(App, {
                data() {
                    return {
                        users,
                        sortOrder: "desc",
                    };
                },
            });

            await wrapper.vm.$nextTick();

            const sortedFirstNames = wrapper.vm.sortedUsers.map((u) => u.name.first);
            expect(sortedFirstNames).toEqual(["Zoe", "Ben", "Alice"]);
        });
    });
});
