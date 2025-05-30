import { mount } from "@vue/test-utils";
import PaginationComponent from "@/components/PaginationComponent.vue";

describe("PaginationComponent.vue", () => {
    beforeEach(() => {
        // Reset innerWidth before each test
        window.innerWidth = 1024;
    });

    it("renders correct number of pages", () => {
        const wrapper = mount(PaginationComponent, {
            propsData: {
                total: 50,
                cardsPerPage: 10,
                currentPage: 1,
            },
        });

        const buttons = wrapper.findAll("button");
        expect(buttons.length).toBe(5); // 50 / 10 = 5 pages
        expect(buttons.at(0).text()).toBe("1");
        expect(buttons.at(4).text()).toBe("5");
    });

    it("highlights the current page", () => {
        const wrapper = mount(PaginationComponent, {
            propsData: {
                total: 30,
                cardsPerPage: 10,
                currentPage: 2,
            },
        });

        const activeButton = wrapper.find("button.active");
        expect(activeButton.exists()).toBe(true);
        expect(activeButton.text()).toBe("2");
    });

    it("emits page-changed event on button click", async () => {
        const wrapper = mount(PaginationComponent, {
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

    it("renders fewer pages on small screens (mobile view)", () => {
        window.innerWidth = 500;

        const wrapper = mount(PaginationComponent, {
            propsData: {
                total: 100,
                cardsPerPage: 10,
                currentPage: 5,
            },
        });

        const buttons = wrapper.findAll("button");
        const buttonTexts = buttons.wrappers.map((btn) => btn.text());
        expect(buttonTexts).toEqual(["4", "5", "6"]); // only ±1 around current page
    });
});
