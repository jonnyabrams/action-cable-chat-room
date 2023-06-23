class User < ApplicationRecord
  validates_uniqueness_of :username

  def self.generate
    adjectives = ['Argumentative', 'Bloodyminded', 'Collegial', 'Dastardly', 'Effusive', 'Flawed', 'Gestative']

    nouns = ['Hologram', 'Iguana', 'Joker', 'Koala', 'Leopard', 'Muppet']

    number = rand.to_s[2..4]

    username = "#{adjectives.sample}-#{nouns.sample}-#{number}"

    create(username: username)
  end
end
