
using Microsoft.AspNetCore.Mvc;

[ApiController]
public class CardsController : ControllerBase
{
    [HttpPost]
    [Route("api/cards/move")]
    public IActionResult MoveCard([FromBody] MoveCardModel model)
    {
        // Process the card move event
        // You can update your database or perform other actions here

        return Ok(new { message = "Card moved successfully" });
    }
}

public class MoveCardModel
{
    public int CardId { get; set; }
    public int NewIndex { get; set; }
    public int OldIndex { get; set; }
    public string NewSection { get; set; }
    public string OldSection { get; set; }
}
