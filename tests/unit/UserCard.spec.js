import { shallowMount } from '@vue/test-utils';
import UserCard from '@/components/UserCard.vue';

const mockUser = {
    name: { first: 'John', last: 'Doe' },
    picture: { large: 'https://example.com/john.jpg' },
    location: {
        street: { number: 123, name: 'Main St' },
        postcode: '12345',
        city: 'Springfield',
        state: 'IL',
        country: 'USA',
    },
    phone: '123-456-7890',
};

describe('UserCard.vue', () => {
    it('renders user name', () => {
        const wrapper = shallowMount(UserCard, {
            propsData: { user: mockUser },
        });
        expect(wrapper.text()).toContain('John Doe');
    });

    it('renders full address in the UI', () => {
        const wrapper = shallowMount(UserCard, {
            propsData: { user: mockUser },
        });
        expect(wrapper.text()).toContain('123 Main St');
        expect(wrapper.text()).toContain('12345 Springfield');
        expect(wrapper.text()).toContain('USA');
    });
});
