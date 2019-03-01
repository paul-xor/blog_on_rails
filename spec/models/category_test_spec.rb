require 'rails_helper'

RSpec.describe Category, type: :model do
    
    describe "category should be valid" do
        it "checks validation" do
            @category = Category.new(name: "digital")

            assert @category.valid?
        end
    end

    describe "name should be present" do
        it "checks presence" do
            @category.name = Category.new(name: "digital")

            assert @category.valid?
            expect(category.errors.messages).to(have_key(:name))
        end
    end
end