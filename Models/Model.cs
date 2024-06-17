
namespace SortableApp.Models;
public class Card
{
    public int Id { get; set; }
    public string Content { get; set; }
}

public class Section
{
    public string Id { get; set; }
    public List<Card> Cards { get; set; }
}