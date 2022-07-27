# classモデル名でモデルを定義することができます。ここでは単数形になることに注意してください。
class Todo < ApplicationRecord
    # validates(:name, presence: true)と同義
    validates :name, presence: true, length: { maximum: 12 }, unique: true
end
