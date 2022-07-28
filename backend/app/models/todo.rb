# classモデル名でモデルを定義することができます。ここでは単数形になることに注意してください。
class Todo < ApplicationRecord
    # validates(:name, presence: true)と同義
    # validatesはクラスメソッド.Modelの定義でよく目にする、attr_accessorやhas_manyも同様にクラスメソッド
    validates :name, presence: true, length: { maximum: 20 }
end
