# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170331130004) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.string   "product"
    t.string   "SKU"
    t.integer  "price"
    t.integer  "available"
    t.string   "year"
    t.text     "description"
    t.integer  "category_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "photo"
    t.index ["category_id"], name: "index_inventories_on_category_id", using: :btree
  end

  create_table "orderings", force: :cascade do |t|
    t.integer  "inventory_id"
    t.integer  "quantity"
    t.integer  "price"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["inventory_id"], name: "index_orderings_on_inventory_id", using: :btree
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "shipping_id"
    t.integer  "ordering_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["ordering_id"], name: "index_orders_on_ordering_id", using: :btree
    t.index ["shipping_id"], name: "index_orders_on_shipping_id", using: :btree
  end

  create_table "registrations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "card_token"
  end

  create_table "shippings", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "street"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.string   "email"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_shippings_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "api_token"
    t.boolean  "admin",           default: false
  end

  add_foreign_key "inventories", "categories"
  add_foreign_key "orderings", "inventories"
  add_foreign_key "orders", "orderings"
  add_foreign_key "orders", "shippings"
  add_foreign_key "shippings", "users"
end
