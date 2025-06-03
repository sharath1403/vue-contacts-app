import { mount } from "@vue/test-utils";
import UserPagination from "@/components/UserPagination.vue";

describe("UserPagination.vue", () => {
    it("renders correct number of pages", () => {
        const wrapper = mount(UserPagination, {
            propsData: {
                total: 50,
                cardsPerPage: 10,
                currentPage: 1,
            },
        });

        const buttons = wrapper.findAll("button");
        expect(buttons.length).toBe(5);
        expect(buttons.at(0).text()).toBe("1");
        expect(buttons.at(4).text()).toBe("5");
    });

    it("highlights the current page", () => {
        const wrapper = mount(UserPagination, {
            propsData: {
                total: 30,
                cardsPerPage: 10,
                currentPage: 2,
            },
        });

        const activeButton = wrapper.find("button.pagination__button--active");
        expect(activeButton.exists()).toBe(true);
        expect(activeButton.text()).toBe("2");
    });

    it("emits page-changed event on button click", async () => {
        const wrapper = mount(UserPagination, {
            propsData: {
                total: 30,
                cardsPerPage: 10,
                currentPage: 1,
            },
        });

        const button = wrapper.find("button:nth-child(3)"); // page 3
        await button.trigger("click");

        expect(wrapper.emitted("page-changed")).toBeTruthy();
        expect(wrapper.emitted("page-changed")[0]).toEqual([3]);
    });
});
