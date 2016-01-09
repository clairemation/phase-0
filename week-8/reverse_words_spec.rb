require_relative "ruby_review"

def random_word(length = 5)
  rand(36**length).to_s(36)
end

describe "reverse_words" do
  it "does nothing to an empty string" do
    expect(reverse_words("")).to eq ""
  end
  it "reverses a single word" do
    word = random_word
    expect(reverse_words(word)).to eq word.reverse
  end
  it "reverses two words" do
    word1 = random_word
    word2 = random_word
    expect(reverse_words("#{word1} #{word2}")).to eq "#{word1.reverse} #{word2.reverse}"
  end
  it "reverses a sentence" do
    expect(reverse_words("Ich bin ein Berliner")).to eq "hcI nib nie renilreB"
  end
end