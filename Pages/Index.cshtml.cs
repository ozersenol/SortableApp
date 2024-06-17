using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SortableApp.Models;
using SortableApp.Services;

namespace SortableApp.Pages;

public class IndexModel : PageModel
{
    private readonly ICardService _cardService;

public List<Section> SectionList;


    public IndexModel(ICardService cardService)
    {
        _cardService = cardService;
    }

    public void OnGet()
    {
        SectionList = _cardService.GetSections();
    }
}
