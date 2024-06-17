
using SortableApp.Models;

namespace SortableApp.Services;

public interface ICardService
{
    List<Section> GetSections();
}

public class CardService : ICardService
{
    public List<Section> GetSections()
    {
        // Sample data - in a real application, this would come from a database
        return new List<Section>
        {
            new Section
            {
                Id = "section1",
                Cards = new List<Card>
                {
                    new Card { Id = 1, Content = "Card 1" },
                    new Card { Id = 2, Content = "Card 2" }
                }
            },
            new Section
            {
                Id = "section2",
                Cards = new List<Card>
                {
                    new Card { Id = 3, Content = "Card 3" },
                    new Card { Id = 4, Content = "Card 4" }
                }
            },
            new Section
            {
                Id = "section3",
                Cards = new List<Card>
                {
                    new Card { Id = 3, Content = "Card 5" },
                    new Card { Id = 4, Content = "Card 6" }
                }
            },
            new Section
            {
                Id = "section4",
                Cards = new List<Card>
                {
                    new Card { Id = 3, Content = "Card 7" },
                    new Card { Id = 4, Content = "Card 8" }
                }
            }
        };
    }
}
